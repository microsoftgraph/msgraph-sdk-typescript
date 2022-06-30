import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {DriveItem} from './driveItem';
import {DriveItemCollectionResponse} from './driveItemCollectionResponse';
import {DriveItemImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DriveItemCollectionResponseImpl implements DriveItemCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The nextLink property */
    private _nextLink?: string | undefined;
    /** The value property */
    private _value?: DriveItem[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new DriveItemCollectionResponse and sets the default values.
     * @param driveItemCollectionResponseParameterValue 
     */
    public constructor(driveItemCollectionResponseParameterValue?: DriveItemCollectionResponse | undefined) {
        this._additionalData = driveItemCollectionResponseParameterValue?.additionalData ? driveItemCollectionResponseParameterValue?.additionalData! : {};
        this._nextLink = driveItemCollectionResponseParameterValue?.nextLink;
        this._value = driveItemCollectionResponseParameterValue?.value;
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
     * Gets the @odata.nextLink property value. The nextLink property
     * @returns a string
     */
    public get nextLink() {
        return this._nextLink;
    };
    /**
     * Sets the @odata.nextLink property value. The nextLink property
     * @param value Value to set for the nextLink property.
     */
    public set nextLink(value: string | undefined) {
        if(value) {
            this._nextLink = value;
        }
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
        if(this.value && this.value.length != 0){        const valueArrValue: DriveItemImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof DriveItemImpl? element:new DriveItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DriveItemImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a DriveItemInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: DriveItem[] | undefined) {
        if(value) {
            const valueArrValue: DriveItemImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof DriveItemImpl? element:new DriveItemImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
