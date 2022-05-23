import {Admin} from './admin';
import {createServiceAnnouncementFromDiscriminatorValue} from './createServiceAnnouncementFromDiscriminatorValue';
import {ServiceAnnouncementImpl} from './index';
import {ServiceAnnouncement} from './serviceAnnouncement';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AdminImpl implements AdditionalDataHolder, Admin, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A container for service communications resources. Read-only. */
    public serviceAnnouncement?: ServiceAnnouncement | undefined;
    /**
     * Instantiates a new Admin and sets the default values.
     * @param adminParameterValue 
     */
    public constructor(adminParameterValue?: Admin | undefined) {
        this.additionalData = adminParameterValue?.additionalData ? adminParameterValue?.additionalData! : {}
        this.serviceAnnouncement = adminParameterValue?.serviceAnnouncement ;
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
        writer.writeObjectValue<ServiceAnnouncementImpl>("serviceAnnouncement", new ServiceAnnouncementImpl(this.serviceAnnouncement));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
