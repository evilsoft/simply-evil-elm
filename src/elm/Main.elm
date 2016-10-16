module Main exposing (..)

import Html exposing (Html, h1, text)
import Html.App


-- MAIN
main : Program Never
main =
  Html.App.program
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }


-- MODEL
type alias Model =
  String

init : ( Model, Cmd Msg )
init =
  ( "Simply Evil Elm", Cmd.none )


-- MESSAGES
type Msg
  = Noop


-- UPDATE
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    Noop ->
      ( model, Cmd.none )


-- SUBSCRIPTIONS
subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.none


-- VIEW
view : Model -> Html Msg
view model =
  h1 [] [ text model ]
