import {Admin} from './admin';
import {createServiceAnnouncementFromDiscriminatorValue} from './createServiceAnnouncementFromDiscriminatorValue';
import {ServiceAnnouncementImpl} from './index';
import {ServiceAnnouncement} from './serviceAnnouncement';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AdminImpl implements Admin {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new Admin and sets the default values.
     * @param adminParameterValue 
     */
    public constructor(adminParameterValue?: Admin | undefined) {
        this._additionalData = adminParameterValue?.additionalData ? adminParameterValue?.additionalData! : {};
        this._serviceAnnouncement = adminParameterValue?.serviceAnnouncement;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "serviceAnnouncement": n => { this.serviceAnnouncement = n.getObjectValue<ServiceAnnouncementImpl>(createServiceAnnouncementFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.serviceAnnouncement){
            writer.writeObjectValue<ServiceAnnouncementImpl>("serviceAnnouncement", (this.serviceAnnouncement instanceof ServiceAnnouncementImpl? this.serviceAnnouncement as ServiceAnnouncementImpl: new ServiceAnnouncementImpl(this.serviceAnnouncement)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the serviceAnnouncement property value. A container for service communications resources. Read-only.
     * @returns a ServiceAnnouncementInterface
     */
    public get serviceAnnouncement() {
        return this._serviceAnnouncement;
    };
    /**
     * Sets the serviceAnnouncement property value. A container for service communications resources. Read-only.
     * @param value Value to set for the serviceAnnouncement property.
     */
    public set serviceAnnouncement(value: ServiceAnnouncement | undefined) {
        if(value) {
            this._serviceAnnouncement = value instanceof ServiceAnnouncementImpl? value as ServiceAnnouncementImpl: new ServiceAnnouncementImpl(value);
        }
    };
}
