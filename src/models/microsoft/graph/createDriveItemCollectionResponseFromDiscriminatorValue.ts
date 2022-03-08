import {DriveItemCollectionResponse} from './driveItemCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DriveItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DriveItemCollectionResponse();
}
