import type {BaseDeltaFunctionResponse} from '../../../../../models/baseDeltaFunctionResponse';
import type {DriveItem} from '../../../../../models/driveItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: DriveItem[] | undefined;
}
