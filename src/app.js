var Gyepes = /** @class */ (function () {
    function Gyepes() {
        this.startBind();
        this.startEventHander();
    }
    Gyepes.prototype.startBind = function () {
        this.diameterInput = document.querySelector('#diameter');
        this.areaInput = document.querySelector('#area');
        this.costInput = document.querySelector('#cost');
        this.calcButton = document.querySelector('#calcButton');
    };
    Gyepes.prototype.startEventHander = function () {
        var _this = this;
        var _a;
        (_a = this.calcButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.startCalculation();
        });
    };
    Gyepes.prototype.startCalculation = function () {
        if (this.diameterInput) {
            var diameter = Number(this.diameterInput.value);
            var radius = diameter / 2;
            this.area = this.calcArea(radius) / 2;
            this.cost = this.calcHalfCost(this.area);
            this.renderResult();
        }
    };
    Gyepes.prototype.calcArea = function (radius) {
        return Math.pow(radius, 2) * Math.PI;
    };
    Gyepes.prototype.calcHalfCost = function (fullArea) {
        return 2500 * (fullArea / 2);
    };
    Gyepes.prototype.renderResult = function () {
        if (this.areaInput) {
            this.areaInput.value = String(this.area);
        }
        if (this.costInput) {
            this.costInput.value = String(this.cost);
        }
    };
    return Gyepes;
}());
new Gyepes();
