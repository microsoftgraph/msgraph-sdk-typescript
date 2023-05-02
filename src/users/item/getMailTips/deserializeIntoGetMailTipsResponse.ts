import {createMailTipsFromDiscriminatorValue} from '../../../models/createMailTipsFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {MailTips} from '../../../models/mailTips';
import {serializeMailTips} from '../../../models/serializeMailTips';
import {GetMailTipsResponse} from './getMailTipsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetMailTipsResponse(getMailTipsResponse: GetMailTipsResponse | undefined = {} as GetMailTipsResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getMailTipsResponse),
        "value": n => { getMailTipsResponse.value = n.getCollectionOfObjectValues<MailTips>(createMailTipsFromDiscriminatorValue); },
    }
}
