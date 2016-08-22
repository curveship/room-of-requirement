var RoomOfRequirement = require('../room-of-requirement').default;

describe("multiple namespaces", function () {
    it("uses last defined rule", function () {
        var accio = RoomOfRequirement({
            foo: () => 1,
        }, {
            foo: () => 2
        });

        accio(({foo}) => expect(foo).toEqual(2));
    });
})