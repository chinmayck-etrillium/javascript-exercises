// given linked list = [5,4,3,2,1]

function reversedLinkedList(arr){
    let head = {
        data : null,
        next : null
    }
    let tail = head;

    for(let i=arr.length-1; i>=0 ; i--){
        let newNode = {
            data : arr[i],
            next : null
        }
        tail.next = newNode;
        tail = newNode;
    }
    return head.next;
}

let arr  = [5,4,3,2,1]
console.log(reversedLinkedList(arr))