import {createServiceAnnouncementFromDiscriminatorValue} from './createServiceAnnouncementFromDiscriminatorValue';
import {ServiceAnnouncement} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Admin implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _odataType?: string | undefined;
    /** A container for service communications resources. Read-only. */
    private _serviceAnnouncement?: ServiceAnnouncement | undefined;
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new Admin and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "serviceAnnouncement": n => { this.serviceAnnouncement = n.getObjectValue<ServiceAnnouncement>(createServiceAnnouncementFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<ServiceAnnouncement>("serviceAnnouncement", this.serviceAnnouncement);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the serviceAnnouncement property value. A container for service communications resources. Read-only.
     * @returns a serviceAnnouncement
     */
    public get serviceAnnouncement() {
        return this._serviceAnnouncement;
    };
    /**
     * Sets the serviceAnnouncement property value. A container for service communications resources. Read-only.
     * @param value Value to set for the serviceAnnouncement property.
     */
    public set serviceAnnouncement(value: ServiceAnnouncement | undefined) {
        this._serviceAnnouncement = value;
    };
}
