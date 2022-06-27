import {Extension} from './extension';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OpenTypeExtension extends Extension, Partial<Parsable> {
    /** A unique text identifier for an open type data extension. Required. */
    extensionName?: string | undefined;
}
