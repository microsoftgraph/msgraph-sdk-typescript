import {deserializeIntoPassiveDnsRecordCollectionResponse} from './deserializeIntoPassiveDnsRecordCollectionResponse';
import {PassiveDnsRecordCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPassiveDnsRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPassiveDnsRecordCollectionResponse;
}
