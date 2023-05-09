import {AdministrativeUnit} from '../../../models/administrativeUnit';
import {BaseDeltaFunctionResponse} from '../../../models/baseDeltaFunctionResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /** The value property */
    value?: AdministrativeUnit[] | undefined;
}
