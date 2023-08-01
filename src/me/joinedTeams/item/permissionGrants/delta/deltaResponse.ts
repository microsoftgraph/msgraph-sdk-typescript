import type {BaseDeltaFunctionResponse} from '../../../../../models/baseDeltaFunctionResponse';
import type {DirectoryObject} from '../../../../../models/directoryObject';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: DirectoryObject[] | undefined;
}
