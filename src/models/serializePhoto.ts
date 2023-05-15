import {Photo} from './photo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePhoto(writer: SerializationWriter, photo: Photo | undefined = {} as Photo) : void {
        writer.writeStringValue("cameraMake", photo.cameraMake);
        writer.writeStringValue("cameraModel", photo.cameraModel);
        writer.writeNumberValue("exposureDenominator", photo.exposureDenominator);
        writer.writeNumberValue("exposureNumerator", photo.exposureNumerator);
        writer.writeNumberValue("fNumber", photo.fNumber);
        writer.writeNumberValue("focalLength", photo.focalLength);
        writer.writeNumberValue("iso", photo.iso);
        writer.writeStringValue("@odata.type", photo.odataType);
        writer.writeNumberValue("orientation", photo.orientation);
        writer.writeDateValue("takenDateTime", photo.takenDateTime);
        writer.writeAdditionalData(photo.additionalData);
}
