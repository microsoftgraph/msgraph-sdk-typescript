import {EntityImpl} from './index';
import {LocalizedNotificationMessage} from './localizedNotificationMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The text content of a Notification Message Template for the specified locale. */
export class LocalizedNotificationMessageImpl extends EntityImpl implements LocalizedNotificationMessage, Parsable {
    /** Flag to indicate whether or not this is the default locale for language fallback. This flag can only be set. To unset, set this property to true on another Localized Notification Message. */
    public isDefault?: boolean | undefined;
    /** DateTime the object was last modified. */
    public lastModifiedDateTime?: Date | undefined;
    /** The Locale for which this message is destined. */
    public locale?: string | undefined;
    /** The Message Template content. */
    public messageTemplate?: string | undefined;
    /** The Message Template Subject. */
    public subject?: string | undefined;
    /**
     * Instantiates a new localizedNotificationMessage and sets the default values.
     * @param localizedNotificationMessageParameterValue 
     */
    public constructor(localizedNotificationMessageParameterValue?: LocalizedNotificationMessage | undefined) {
        super();
        this.isDefault = localizedNotificationMessageParameterValue?.isDefault ;
        this.lastModifiedDateTime = localizedNotificationMessageParameterValue?.lastModifiedDateTime ;
        this.locale = localizedNotificationMessageParameterValue?.locale ;
        this.messageTemplate = localizedNotificationMessageParameterValue?.messageTemplate ;
        this.subject = localizedNotificationMessageParameterValue?.subject ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "locale": n => { this.locale = n.getStringValue(); },
            "messageTemplate": n => { this.messageTemplate = n.getStringValue(); },
            "subject": n => { this.subject = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.isDefault){
        writer.writeBooleanValue("isDefault", this.isDefault);
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.locale){
        writer.writeStringValue("locale", this.locale);
        }
        if(this.messageTemplate){
        writer.writeStringValue("messageTemplate", this.messageTemplate);
        }
        if(this.subject){
        writer.writeStringValue("subject", this.subject);
        }
    };
}
