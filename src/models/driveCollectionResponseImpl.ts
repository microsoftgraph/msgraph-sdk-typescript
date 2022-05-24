import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {Drive} from './drive';
import {DriveCollectionResponse} from './driveCollectionResponse';
import {DriveImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DriveCollectionResponseImpl implements AdditionalDataHolder, DriveCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Drive[] | undefined;
    /**
     * Instantiates a new DriveCollectionResponse and sets the default values.
     * @param driveCollectionResponseParameterValue 
     */
    public constructor(driveCollectionResponseParameterValue?: DriveCollectionResponse | undefined) {
        this.additionalData = driveCollectionResponseParameterValue?.additionalData ? driveCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = driveCollectionResponseParameterValue?.nextLink ;
        this.value = driveCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DriveImpl>(createDriveFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DriveImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DriveImpl(element));});
        writer.writeCollectionOfObjectValues<DriveImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
