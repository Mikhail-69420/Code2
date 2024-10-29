"use strict";
var EAI091;
(function (EAI091) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    const v1 = new Vector(5, 4);
    v1.scale(2);
    console.log(v1);
})(EAI091 || (EAI091 = {}));
//# sourceMappingURL=EAI091.js.map