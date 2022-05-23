import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {DriveItem} from './driveItem';
import {DriveItemCollectionResponse} from './driveItemCollectionResponse';
import {DriveItemImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DriveItemCollectionResponseImpl implements AdditionalDataHolder, DriveItemCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DriveItem[] | undefined;
    /**
     * Instantiates a new DriveItemCollectionResponse and sets the default values.
     * @param driveItemCollectionResponseParameterValue 
     */
    public constructor(driveItemCollectionResponseParameterValue?: DriveItemCollectionResponse | undefined) {
        this.additionalData = driveItemCollectionResponseParameterValue?.additionalData ? driveItemCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = driveItemCollectionResponseParameterValue?.nextLink ;
        this.value = driveItemCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DriveItemImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DriveItemImpl(element));});
        writer.writeCollectionOfObjectValues<DriveItemImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
