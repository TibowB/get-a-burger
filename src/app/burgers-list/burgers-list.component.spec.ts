import { BurgerService } from "../services/burger.service";
import { BurgersListComponent } from "./burgers-list.component";

describe('BurgersListComponent', () => {
    it("Burgers list should load 4 burgers from BurgerService.", () => {
        const component = new BurgersListComponent(new BurgerService());
        expect(component.burgers.length).toBe(0, "Component already have burgers before initialization.");
        component.ngOnInit();
        expect(component.burgers.length).toBe(4, "Burgers not loaded on initialization.");
    });
});