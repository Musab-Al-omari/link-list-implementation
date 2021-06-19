'use strict'

const Node = require('./node.js')


class LinkList {
    constructor() {
        this.head = null
    }


    insert(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            return this
        }
        let temp = this.head;
        this.head = newNode
        newNode.next = temp

        return this

    }

    append(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            return newNode
        }
        let currentNode = this.head

        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = newNode
        return newNode
    }


    includes(value) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return true
            }
            currentNode = currentNode.next

        }
        return false
    }

    toString() {
        let currentNode = this.head
        // let string = "{ a } -> { b } -> { c } -> NULL"
        let myString = ''

        while (currentNode) {
            myString += `{ ${currentNode.value} } -> `
            currentNode = currentNode.next
        }

        myString += 'NULL'
        return myString
    }

    insertBefore(value, newVal) {

        let newNode = new Node(newVal);

        // if there is no head the nod will be in the first
        if (!this.head) {
            this.head = newNode
            return this
        }


        //  if you want insert before the first value 

        if (this.head.value === value) {

            let temp = this.head;

            this.head = newNode

            this.head.next = temp

            return this
        }

        let currentNode = this.head

        // if you want to insert in any place in the link list
        while (currentNode) {


            // edge case if you reached the end of the link list 
            if (!currentNode.next) {
                return 'this value not assign in the linkList'
            }

            if (currentNode.next.value === value) {
                let temp = currentNode.next;
                currentNode.next = newNode;
                currentNode.next.next = temp;
                return this
            }

            currentNode = currentNode.next
        }

    }


    insertAfter(value, newVal) {

        let newNode = new Node(newVal);

        if (!this.head) {
            this.head = newNode
            return this
        }
        let currentNode = this.head

        while (currentNode) {
            if (currentNode.value === value) {
                let temp = currentNode.next

                currentNode.next = newNode
                currentNode.next.next = temp
                return this
            }
            currentNode = currentNode.next
        }
        return 'this value not assign in the linkList'
    }




    kthFromEnd(k) {
        const array = []

        let currentNode = this.head

        while (currentNode) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        if (array[array.length - 1 - k]) {
            return array[array.length - 1 - k]
        } else {

            return 'you traverse the last element'
        }
    }

}

const ll = new LinkList();
ll.append(1)
ll.append(3)
ll.append(5)
const ll2 = new LinkList();
ll2.append(2)
ll2.append(4)
ll2.append(6)
ll2.append(7)

// ll.insert(1)
// ll.toString()
// console.log(ll.head.next);
// console.log( ll.kthFromEnd(4));
// console.log('hi');

console.log(zipLists(ll, ll2));

function zipLists(llOne, llTow) {

    let firstLl = llOne.head
    let secondLl = llTow.head
    let newLL = new LinkList();

    while (firstLl && secondLl) {
        newLL.append(firstLl.value)
        newLL.append(secondLl.value)
        firstLl = firstLl.next;
        secondLl = secondLl.next;
    }
    while (firstLl) {
        newLL.append(firstLl.value);
        firstLl = firstLl.next;
    }
    while (secondLl) {
        newLL.append(secondLl.value);
        secondLl = secondLl.next;
    }
    return newLL.toString()
}