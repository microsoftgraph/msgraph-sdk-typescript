import {IosCertificateProfileCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosCertificateProfileCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosCertificateProfileCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosCertificateProfileCollectionResponse();
}
