import { Recipe } from "../recipe.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "This is a test recipe",
      "https://p1.pxfuel.com/preview/548/595/580/gastronomy-food-dishes-eat.jpg"
    ),
    new Recipe(
      "Test Recipe",
      "This is a test recipe",
      "https://p1.pxfuel.com/preview/548/595/580/gastronomy-food-dishes-eat.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
