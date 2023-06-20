import {MailTips} from '../../models/mailTips';
import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeMailTips} from '../../models/serializeMailTips';
import {GetMailTipsResponse} from './getMailTipsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetMailTipsResponse(getMailTipsResponse: GetMailTipsResponse | undefined = {} as GetMailTipsResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getMailTipsResponse)
        writer.writeCollectionOfObjectValues<MailTips>("value", getMailTipsResponse.value, serializeMailTips);
}
