module Main exposing (..)

import Html exposing (Html, div, text)
import Html.App

-- MODEL
type alias Model =
  String

init : ( Model, Cmd Msg )
init =
  ( "Simply Evil Elm", Cmd.none )


-- MESSAGES
type Msg
  = Noop


-- VIEW
view : Model -> Html Msg
view model =
  div [] [ text model ]


-- UPDATE
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    Noop ->
      ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.none


-- MAIN
main : Program Never
main =
  Html.App.program
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }