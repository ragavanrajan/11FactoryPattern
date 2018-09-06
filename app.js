function MemberFactory() {
    this.createMember = function(name, type) {
        let memeber;

        if (type === 'simple') {
            member = new SimpleMemberShip(name);

        } else if (type === 'standard') {
            member = new StandardMemberShip(name);
        } else if (type === 'super') {
            member = new SuperMemberShip(name);
        }

        member.type = type;

        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`);

        }

        return member;
    }
}

// The following are the subclasses

const SimpleMemberShip = function(name) {
    this.name = name;
    this.cost = '$5';
}

const StandardMemberShip = function(name) {
    this.name = name;
    this.cost = '$15';
}

const SuperMemberShip = function(name) {
    this.name = name;
    this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Domingo', 'simple'));
members.push(factory.createMember('Mike Bisset', 'super'));
members.push(factory.createMember('Janice  william,', 'standard'));
members.push(factory.createMember('John Giblin', 'simple'));
// console.log(members);

members.forEach(function(member) {
    member.define();
})