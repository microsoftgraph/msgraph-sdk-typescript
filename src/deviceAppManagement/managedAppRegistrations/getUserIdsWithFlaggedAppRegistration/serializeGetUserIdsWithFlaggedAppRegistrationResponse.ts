import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import type {GetUserIdsWithFlaggedAppRegistrationResponse} from './getUserIdsWithFlaggedAppRegistrationResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetUserIdsWithFlaggedAppRegistrationResponse(writer: SerializationWriter, getUserIdsWithFlaggedAppRegistrationResponse: GetUserIdsWithFlaggedAppRegistrationResponse | undefined = {} as GetUserIdsWithFlaggedAppRegistrationResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getUserIdsWithFlaggedAppRegistrationResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", getUserIdsWithFlaggedAppRegistrationResponse.value);
}
