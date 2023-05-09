import {BaseDeltaFunctionResponse} from '../../../../../models/baseDeltaFunctionResponse';
import {DriveItem} from '../../../../../models/driveItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /** The value property */
    value?: DriveItem[] | undefined;
}
