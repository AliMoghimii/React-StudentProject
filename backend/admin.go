package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

type Food struct {
	Name        string  `json:"name"`
	Description string  `json:"desc"`
	Price       float64 `json:"price"`
}

func Test(c echo.Context) error {
	return c.String(http.StatusOK, "Server is up and running!")
}

//func getFoodInfo(c echo.Context) error {
//
//}

func main() {

	e := echo.New()
	e.GET("/", Test)

	//e.GET("/foods/:{id}", getFoodInfo)

	e.Logger.Fatal(e.Start(":8000"))
}
