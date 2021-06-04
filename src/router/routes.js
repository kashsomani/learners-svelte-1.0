import SampleText from '../components/SampleText.svelte'
import SamplePicture from '../components/SamplePicture.svelte'


export const routes = {
    // Exact path
    '/': SampleText,
    '/example': SamplePicture,

    // // Using named parameters, with last being optional
    // '/author/:first/:last?': Author,

    // // Wildcard parameter
    // '/book/*': Book,

    // // Catch-all
    // // This is optional, but if present it must be the last
    // '*': NotFound,
}