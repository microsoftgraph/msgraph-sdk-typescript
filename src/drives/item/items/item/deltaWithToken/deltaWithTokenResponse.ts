import { type BaseDeltaFunctionResponse } from '../../../../../models/baseDeltaFunctionResponse';
import { type DriveItem } from '../../../../../models/driveItem';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeltaWithTokenResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: DriveItem[] | undefined;
}
