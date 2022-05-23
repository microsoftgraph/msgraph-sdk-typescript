import {createDriveItemVersionFromDiscriminatorValue} from './createDriveItemVersionFromDiscriminatorValue';
import {DriveItemVersion} from './driveItemVersion';
import {DriveItemVersionCollectionResponse} from './driveItemVersionCollectionResponse';
import {DriveItemVersionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DriveItemVersionCollectionResponseImpl implements AdditionalDataHolder, DriveItemVersionCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DriveItemVersion[] | undefined;
    /**
     * Instantiates a new DriveItemVersionCollectionResponse and sets the default values.
     * @param driveItemVersionCollectionResponseParameterValue 
     */
    public constructor(driveItemVersionCollectionResponseParameterValue?: DriveItemVersionCollectionResponse | undefined) {
        this.additionalData = driveItemVersionCollectionResponseParameterValue?.additionalData ? driveItemVersionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = driveItemVersionCollectionResponseParameterValue?.nextLink ;
        this.value = driveItemVersionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DriveItemVersionImpl>(createDriveItemVersionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: DriveItemVersionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DriveItemVersionImpl(element));});
        writer.writeCollectionOfObjectValues<DriveItemVersionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
