console.log('hello')
import { HfInference } from 'https://cdn.jsdelivr.net/npm/@huggingface/inference@2.6.4/+esm';

// const result = await hf.translation({
// model: 'facebook/mbart-large-50-many-to-many-mmt',
// inputs: 'My name is Wolfgang and I live in Berlin',
// parameters: {
//   src_lang: 'en_XX',
//   tgt_lang: 'fr_XX'
// }
// })

const button = document.getElementById('btn')
button.addEventListener('click', async function () {
  console.log('the button is working')
  const hf = new HfInference("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")
  const result = await hf.translation({
    model: 'facebook/mbart-large-50-many-to-many-mmt',
    inputs: 'My name is Wolfgang and I live in Berlin',
    parameters: {
      src_lang: 'en_XX',
      tgt_lang: 'fr_XX'
    }
    })
    console.log(result)
})
// const response = result.translation_text









