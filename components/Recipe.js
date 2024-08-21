"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var S_Recipe_1 = require("../styled-components/S.Recipe");
var react_1 = require("react");
var styles = react_native_1.StyleSheet.create({
    headerImg: {
        height: 220,
        width: 220,
    },
});
function Recipe(_a) {
    var _this = this;
    var route = _a.route;
    var recipeTitle = route.params.recipeTitle;
    var _b = (0, react_1.useState)(null), data = _b[0], setData = _b[1];
    var _c = (0, react_1.useState)(Object), recipe = _c[0], setRecipe = _c[1];
    var _d = (0, react_1.useState)(false), refreshing = _d[0], setRefreshing = _d[1];
    var _e = (0, react_1.useState)(false), isEnabled = _e[0], setIsEnabled = _e[1];
    var toggleSwitch = function () { return setIsEnabled(function (previousState) { return !previousState; }); };
    var onRefresh = (0, react_1.useCallback)(function () {
        if (data === null) {
            setRefreshing(true);
            console.log("Refreshing..");
        }
        setTimeout(function () {
            setRefreshing(false);
        }, 1500);
    }, []);
    (0, react_1.useEffect)(function () {
        var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, data, matchingIndex, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://mbergq.github.io/json-recipes/recipes.json")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        setData(data);
                        console.log("Data is fetched");
                        for (i = 0; i < data.recipes.length; i++) {
                            if (data.recipes[i].language[0].swedish.name === recipeTitle) {
                                matchingIndex = i;
                                console.log("Index is: " + matchingIndex);
                            }
                        }
                        console.log(data.recipes[matchingIndex].language[0].swedish);
                        setRecipe(data.recipes[matchingIndex].language[0].swedish);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchData();
    }, []);
    var instrNumber = 1;
    return (<>
      {isEnabled === false ? (<S_Recipe_1.StyledScrollView>
          <react_native_1.RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
          {data !== null ? (<S_Recipe_1.RecipeLayout>
              <S_Recipe_1.StyledTitle>{recipeTitle}</S_Recipe_1.StyledTitle>
              <react_native_1.Image style={styles.headerImg} source={require("../assets/testimg.jpg")}></react_native_1.Image>
              {recipe.description && (<S_Recipe_1.StyledDescription>{recipe.description}</S_Recipe_1.StyledDescription>)}
              <S_Recipe_1.StyledIngView>
                <react_native_1.Switch trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled}/>
                <S_Recipe_1.StyledDescription>Ingredienser</S_Recipe_1.StyledDescription>
                {recipe.ingredients &&
                    recipe.ingredients.map(function (ingredient, index) { return (<react_native_1.Text key={index}>
                      {ingredient.name + "- " + ingredient.amount}
                    </react_native_1.Text>); })}
              </S_Recipe_1.StyledIngView>
              <S_Recipe_1.StyledInsView>
                <S_Recipe_1.StyledDescription>Instruktioner</S_Recipe_1.StyledDescription>
                {recipe.instructions &&
                    recipe.instructions.map(function (instruction, index) { return (<S_Recipe_1.StyledText key={index}>
                      {instrNumber++ + ". " + instruction}
                    </S_Recipe_1.StyledText>); })}
              </S_Recipe_1.StyledInsView>
            </S_Recipe_1.RecipeLayout>) : (<react_native_1.ActivityIndicator size="small" color="#0000ff"/>)}
        </S_Recipe_1.StyledScrollView>) : (
        //focus mode view
        <S_Recipe_1.StyledScrollView>
          <react_native_1.RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
          <S_Recipe_1.RecipeLayout>
            <S_Recipe_1.StyledIngView>
              <react_native_1.Switch trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled}/>
              <react_native_1.Text>Focus mode</react_native_1.Text>
              <S_Recipe_1.StyledDescription>Ingredienser</S_Recipe_1.StyledDescription>
              {recipe.ingredients &&
                recipe.ingredients.map(function (i) { return (<react_native_1.Text>{i.name + "- " + i.amount}</react_native_1.Text>); })}
            </S_Recipe_1.StyledIngView>
            <S_Recipe_1.StyledInsView>
              <S_Recipe_1.StyledDescription>Instruktioner</S_Recipe_1.StyledDescription>
              {recipe.instructions &&
                recipe.instructions.map(function (instruction) { return (<S_Recipe_1.StyledText>{instrNumber++ + ". " + instruction}</S_Recipe_1.StyledText>); })}
            </S_Recipe_1.StyledInsView>
          </S_Recipe_1.RecipeLayout>
        </S_Recipe_1.StyledScrollView>)}
    </>);
}
exports.default = Recipe;
