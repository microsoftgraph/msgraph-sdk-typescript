import {Extension} from './extension';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OpenTypeExtension extends Extension, Parsable {
    /**
     * A unique text identifier for an open type data extension. Optional.
     */
    extensionName?: string | undefined;
}
