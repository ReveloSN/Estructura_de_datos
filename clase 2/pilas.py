class Stack:
    def __init__(self):
        self._items = []
        
    def push(self, item):
        self._items.append(item)
        
    def pop(self):
        if not self .is_empty():
            return self._items.pop()
        return None
    
    def peek(self):
        if not self.is_empty():
            return self._items[-1]
        return None
    def is_empty(self):
        return len(self._items) == 0

class Chemical:
    def __init__(self, name, state):
        self.name = name
        self.state = state  # solid, liquid, gas
        
    def __str__(self):
        return f"{self.name} ({self.state})"

class LabExperiment:
    def __init__(self, experiment_name):
        self.experiment_name = experiment_name
        self.chemical_stack = Stack()
        
    def add_chemical(self, chemical):
        self.chemical_stack.push(chemical)
        print(f"Added: {chemical}")
        
    def undo_last_addition(self):
        removed = self.chemical_stack.pop()
        if removed:
            print(f"Removed last chemical: {removed}")
        else:
            print("No chemicals to remove.")
            
    def show_current_mixture(self):
        if self.chemical_stack.is_empty():
            print("The container is empty.")
        else:
            print("Current mixture contains:")
            for chem in reversed(self.chemical_stack._items):
                print(f"- {chem}")

experiment = LabExperiment("Acid-Base Reaction")

acid = Chemical("Hydrochloric Acid", "liquid")
base = Chemical("Sodium Hydroxide", "solid")
indicator = Chemical("Phenolphthalein", "gas")

experiment.add_chemical(acid)
experiment.add_chemical(base)      
experiment.add_chemical(indicator)
experiment.show_current_mixture()
print("\nUndoing last addition...")
experiment.undo_last_addition()
experiment.show_current_mixture()