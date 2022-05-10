import {createLocalizedNotificationMessageFromDiscriminatorValue} from './createLocalizedNotificationMessageFromDiscriminatorValue';
import {EntityImpl, LocalizedNotificationMessageImpl} from './index';
import {LocalizedNotificationMessage} from './localizedNotificationMessage';
import {NotificationMessageTemplate} from './notificationMessageTemplate';
import {NotificationTemplateBrandingOptions} from './notificationTemplateBrandingOptions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NotificationMessageTemplateImpl extends EntityImpl implements NotificationMessageTemplate, Parsable {
    /** The Message Template Branding Options. Branding is defined in the Intune Admin Console. Possible values are: none, includeCompanyLogo, includeCompanyName, includeContactInformation, includeCompanyPortalLink.  */
    brandingOptions?: NotificationTemplateBrandingOptions | undefined;
    /** The default locale to fallback onto when the requested locale is not available.  */
    defaultLocale?: string | undefined;
    /** Display name for the Notification Message Template.  */
    displayName?: string | undefined;
    /** DateTime the object was last modified.  */
    lastModifiedDateTime?: Date | undefined;
    /** The list of localized messages for this Notification Message Template.  */
    localizedNotificationMessages?: LocalizedNotificationMessage[] | undefined;
    /**
     * Instantiates a new notificationMessageTemplate and sets the default values.
     * @param notificationMessageTemplateParameterValue 
     */
    public constructor(notificationMessageTemplateParameterValue?: NotificationMessageTemplate | undefined) {
        super();
        this.brandingOptions = notificationMessageTemplateParameterValue?.brandingOptions ;
        this.defaultLocale = notificationMessageTemplateParameterValue?.defaultLocale ;
        this.displayName = notificationMessageTemplateParameterValue?.displayName ;
        this.lastModifiedDateTime = notificationMessageTemplateParameterValue?.lastModifiedDateTime ;
        this.localizedNotificationMessages = notificationMessageTemplateParameterValue?.localizedNotificationMessages ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "brandingOptions": n => { this.brandingOptions = n.getEnumValue<NotificationTemplateBrandingOptions>(NotificationTemplateBrandingOptions); },
            "defaultLocale": n => { this.defaultLocale = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "localizedNotificationMessages": n => { this.localizedNotificationMessages = n.getCollectionOfObjectValues<LocalizedNotificationMessageImpl>(createLocalizedNotificationMessageFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.brandingOptions){
        if(this.brandingOptions)
        writer.writeEnumValue<NotificationTemplateBrandingOptions>("brandingOptions", this.brandingOptions);
        }
        if(this.defaultLocale){
        if(this.defaultLocale)
        writer.writeStringValue("defaultLocale", this.defaultLocale);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastModifiedDateTime){
        if(this.lastModifiedDateTime)
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.localizedNotificationMessages){
        const localizedNotificationMessagesArrValue: LocalizedNotificationMessageImpl[] = []; this.localizedNotificationMessages?.forEach(element => {localizedNotificationMessagesArrValue.push(new LocalizedNotificationMessageImpl(element));});
        writer.writeCollectionOfObjectValues<LocalizedNotificationMessageImpl>("localizedNotificationMessages", localizedNotificationMessagesArrValue);
        }
    };
}
