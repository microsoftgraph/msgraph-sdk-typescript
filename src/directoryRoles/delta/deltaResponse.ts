import type {BaseDeltaFunctionResponse} from '../../models/baseDeltaFunctionResponse';
import type {DirectoryRole} from '../../models/directoryRole';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: DirectoryRole[] | undefined;
}
