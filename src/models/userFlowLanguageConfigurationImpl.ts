import {createUserFlowLanguagePageFromDiscriminatorValue} from './createUserFlowLanguagePageFromDiscriminatorValue';
import {EntityImpl, UserFlowLanguagePageImpl} from './index';
import {UserFlowLanguageConfiguration} from './userFlowLanguageConfiguration';
import {UserFlowLanguagePage} from './userFlowLanguagePage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class UserFlowLanguageConfigurationImpl extends EntityImpl implements Parsable, UserFlowLanguageConfiguration {
    /** Collection of pages with the default content to display in a user flow for a specified language. This collection does not allow any kind of modification. */
    public defaultPages?: UserFlowLanguagePage[] | undefined;
    /** The language name to display. This property is read-only. */
    public displayName?: string | undefined;
    /** Indicates whether the language is enabled within the user flow. */
    public isEnabled?: boolean | undefined;
    /** Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages). */
    public overridesPages?: UserFlowLanguagePage[] | undefined;
    /**
     * Instantiates a new userFlowLanguageConfiguration and sets the default values.
     * @param userFlowLanguageConfigurationParameterValue 
     */
    public constructor(userFlowLanguageConfigurationParameterValue?: UserFlowLanguageConfiguration | undefined) {
        super();
        this.defaultPages = userFlowLanguageConfigurationParameterValue?.defaultPages ;
        this.displayName = userFlowLanguageConfigurationParameterValue?.displayName ;
        this.isEnabled = userFlowLanguageConfigurationParameterValue?.isEnabled ;
        this.overridesPages = userFlowLanguageConfigurationParameterValue?.overridesPages ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "defaultPages": n => { this.defaultPages = n.getCollectionOfObjectValues<UserFlowLanguagePageImpl>(createUserFlowLanguagePageFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "overridesPages": n => { this.overridesPages = n.getCollectionOfObjectValues<UserFlowLanguagePageImpl>(createUserFlowLanguagePageFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.defaultPages && this.defaultPages.length != 0){        const defaultPagesArrValue: UserFlowLanguagePageImpl[] = []; this.defaultPages?.forEach(element => {defaultPagesArrValue.push(new UserFlowLanguagePageImpl(element));});
        writer.writeCollectionOfObjectValues<UserFlowLanguagePageImpl>("defaultPages", defaultPagesArrValue);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isEnabled){
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        }
        if(this.overridesPages && this.overridesPages.length != 0){        const overridesPagesArrValue: UserFlowLanguagePageImpl[] = []; this.overridesPages?.forEach(element => {overridesPagesArrValue.push(new UserFlowLanguagePageImpl(element));});
        writer.writeCollectionOfObjectValues<UserFlowLanguagePageImpl>("overridesPages", overridesPagesArrValue);
        }
    };
}
