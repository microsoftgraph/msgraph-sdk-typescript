import {AppScope} from './appScope';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleManagement singleton. */
export class AppScopeImpl extends EntityImpl implements AppScope, Parsable {
    /** Provides the display name of the app-specific resource represented by the app scope. Provided for display purposes since appScopeId is often an immutable, non-human-readable id. This property is read only. */
    public displayName?: string | undefined;
    /** Describes the type of app-specific resource represented by the app scope. Provided for display purposes, so a user interface can convey to the user the kind of app specific resource represented by the app scope. This property is read only. */
    public type?: string | undefined;
    /**
     * Instantiates a new appScope and sets the default values.
     * @param appScopeParameterValue 
     */
    public constructor(appScopeParameterValue?: AppScope | undefined) {
        super();
        this.displayName = appScopeParameterValue?.displayName ;
        this.type = appScopeParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.type){
        writer.writeStringValue("type", this.type);
        }
    };
}
