import type {MailTips} from '../../models/mailTips';
import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeMailTips} from '../../models/serializeMailTips';
import type {GetMailTipsResponse} from './getMailTipsResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetMailTipsResponse(writer: SerializationWriter, getMailTipsResponse: GetMailTipsResponse | undefined = {} as GetMailTipsResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getMailTipsResponse)
        writer.writeCollectionOfObjectValues<MailTips>("value", getMailTipsResponse.value, serializeMailTips);
}
