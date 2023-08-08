import type {AdministrativeUnit} from '../../../models/administrativeUnit';
import type {BaseDeltaFunctionResponse} from '../../../models/baseDeltaFunctionResponse';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: AdministrativeUnit[] | undefined;
}
