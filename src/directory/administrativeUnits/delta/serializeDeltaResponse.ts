import type {AdministrativeUnit} from '../../../models/administrativeUnit';
import {serializeAdministrativeUnit} from '../../../models/serializeAdministrativeUnit';
import {serializeBaseDeltaFunctionResponse} from '../../../models/serializeBaseDeltaFunctionResponse';
import type {DeltaResponse} from './deltaResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<AdministrativeUnit>("value", deltaResponse.value, serializeAdministrativeUnit);
}
