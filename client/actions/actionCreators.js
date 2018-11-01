//increment a like
export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  };
}

//add comment
export function addComment(postId, author, comment) {
  type: "ADD_COMMENT", postId, author, comment;
}

//remove comment
export function removeComment(postId, index) {
  type: "REMOVE_COMMENT", index, postId;
}
