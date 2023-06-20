import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetUserIdsWithFlaggedAppRegistrationResponse} from './getUserIdsWithFlaggedAppRegistrationResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetUserIdsWithFlaggedAppRegistrationResponse(getUserIdsWithFlaggedAppRegistrationResponse: GetUserIdsWithFlaggedAppRegistrationResponse | undefined = {} as GetUserIdsWithFlaggedAppRegistrationResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getUserIdsWithFlaggedAppRegistrationResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", getUserIdsWithFlaggedAppRegistrationResponse.value);
}
