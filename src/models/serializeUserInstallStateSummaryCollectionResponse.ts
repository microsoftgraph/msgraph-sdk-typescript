import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserInstallStateSummary} from './serializeUserInstallStateSummary';
import {UserInstallStateSummary} from './userInstallStateSummary';
import {UserInstallStateSummaryCollectionResponse} from './userInstallStateSummaryCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserInstallStateSummaryCollectionResponse(writer: SerializationWriter, userInstallStateSummaryCollectionResponse: UserInstallStateSummaryCollectionResponse | undefined = {} as UserInstallStateSummaryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userInstallStateSummaryCollectionResponse)
        writer.writeCollectionOfObjectValues<UserInstallStateSummary>("value", userInstallStateSummaryCollectionResponse.value, serializeUserInstallStateSummary);
}
