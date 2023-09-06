import { deserializeIntoStoragePlanInformation } from './deserializeIntoStoragePlanInformation';
import { type StoragePlanInformation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createStoragePlanInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStoragePlanInformation;
}
