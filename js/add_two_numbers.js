// add two numbers on leetcode
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const ListNode = require('../js/list_node')

class Numbers {


    addTwoNumbers(l1, l2) {
        // version nok sur leetcode l1 étant une liste de nodes (liste chainée) et non un array, reverse n'existe pas
        // let l3 = parseInt(l1.reverse().join('')) + parseInt(l2.reverse().join(''))
        // return  l3.toString().split('').reverse().map((elem) => Number(elem))


        const num1 = this.getNumber(l1)
        const num2 = this.getNumber(l2)

        let result = num1 + num2

        result = result.toString().split('').map((elem) => Number(elem))
        let res = this.tabToList(result);
        return res

    };


    tabToList(tab) {
        let res = tab.reduce((acc, current) => {
            if (acc === 0) {
                acc = new ListNode(current)
            } else {
                acc = new ListNode(current, acc)
            }
            return acc
        }, 0)
        return res;
    }

    getNumber(liste) {
        let num = []
        while(liste.next !== null){
            num.push(liste.val)
            liste = liste.next
        }
        num.push(liste.val)
        num = BigInt(num.reverse().join(''))

        return num
    }


}


module.exports = Numbers;

