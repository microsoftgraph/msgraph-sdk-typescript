import { type BaseDeltaFunctionResponse } from '../../../../models/baseDeltaFunctionResponse';
import { type ContactFolder } from '../../../../models/contactFolder';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: ContactFolder[] | undefined;
}
