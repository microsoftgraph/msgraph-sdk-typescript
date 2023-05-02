import {AdministrativeUnit} from '../../../models/administrativeUnit';
import {serializeAdministrativeUnit} from '../../../models/serializeAdministrativeUnit';
import {serializeBaseDeltaFunctionResponse} from '../../../models/serializeBaseDeltaFunctionResponse';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<AdministrativeUnit>("value", deltaResponse.value, serializeAdministrativeUnit);
}
