import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Markdown from "react-native-markdown-display";
import { ScrollView } from 'react-native-gesture-handler';

const copy = `
# Sample Markdown

## Introduction
Welcome to this sample Markdown document.
Markdown is a lightweight markup language 
for creating formatted text using a plain-text editor.

## Section 1: **Basics** 
**This is bold text**
*This is italic text*

## Section 2: **Lists**
1. Numbered lists are easy
2. Just start with a number and a dot
3. Like this !

- Bulleted lists are also easy
- Use a dash and a space
- Like this !

## Section 3: **Images and Links**
1. To add an image: ![alt text](https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg)
2. To create a link: **[eoDesign](https://eodesign.me)**
3. Like this !

## Section 4: **Code Blocks**
\`\`\`\ js
console.log('Code Blocks');
\`\`\`\

`;


export default function EditorScreen() {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior='automatic'>
      <Markdown style={markdownStyles}>
         {copy}
      </Markdown>
    </ScrollView>
  )
}

const markdownStyles = StyleSheet.create({
  heading1: {
    color: "#212020",
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "900",
    lineHeight: 40,
  },
  heading2: {
    color: "#212020",
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "700",
    lineHeight: 32,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  code_blocks: {
   color: 'gray',
   fontFamily: 'SF_Mono'
  }
}); 


const styles = StyleSheet.create({
   page: {
      backgroundColor: 'white',
      flex: 1,
      padding: 10,
   },

})