/**
 * This class is not supposed to be instantiated directly. Instead, any implementation of
 * a Decoder will return an instance of this class when instantiated.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Decoder {}

/**
 * Instantiate a new ByteLevel Decoder
 */
export function byteLevelDecoder(): Decoder;

/**
 * Instantiate a new WordPiece Decoder
 * @param [prefix='##'] The prefix to use for subwords that are not a beginning-of-word
 */
export function wordPieceDecoder(prefix?: string): Decoder;

/**
 * Instantiate a new Metaspace
 *
 * @param [replacement='▁'] The replacement character.
 * Must be exactly one character. By default we use the `▁` (U+2581) meta symbol (same as in SentencePiece).
 * @param [addPrefixSpace=true] Whether to add a space to the first word if there isn't already one.
 * This lets us treat `hello` exactly like `say hello`.
 */
export function metaspaceDecoder(replacement?: string, addPrefixSpace?: boolean): Decoder;

/**
 * Instantiate a new BPE Decoder
 * @param [suffix='</w>'] The suffix that was used to characterize an end-of-word.
 * This suffix will be replaced by whitespaces during the decoding
 */
export function bpeDecoder(suffix?: string): Decoder;
