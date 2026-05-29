# IANA Well-Known URI Registration: `oobi`

This document is a draft request to register the `oobi` suffix in the IANA
**Well-Known URIs** registry, per [RFC 8615](https://www.rfc-editor.org/rfc/rfc8615).

## How to submit

The registry is governed by RFC 8615 under a *Specification Required* policy
with expert review. A request may be filed by either route:

- **GitHub (preferred):** open an issue at
  <https://github.com/protocol-registries/well-known-uris> containing the
  completed template below.
- **Email:** send the completed template to `wellknown-uri-review@ietf.org`
  with a subject such as *"Request for well-known URI: oobi"*.

The current registry contents are at
<https://www.iana.org/assignments/well-known-uris>.

## Registration template (RFC 8615 §3.1)

**URI suffix:**
`oobi`

**Change controller:**
Trust over IP Foundation (Key Event Receipt Infrastructure specification
editors).

**Specification document(s):**
Key Event Receipt Infrastructure (KERI), Annex A, section
"Out-Of-Band-Introduction (OOBI)", subsection "Well-Known OOBI".

- Latest draft / source: <https://github.com/trustoverip/kswg-keri-specification>
- Versioned release (DOI): <https://doi.org/10.5281/zenodo.18887102>

The "Well-Known OOBI" subsection defines the value `oobi` as a well-known URI:
a path of the form `/.well-known/oobi/{aid}`, where `{aid}` is a KERI Autonomic
Identifier (AID). An HTTP `GET` against this path returns either an
Out-Of-Band Introduction (OOBI) for the given AID or a redirection to the
target URL where the OOBI can be found. The response body, when present, is a
CESR-compatible serialization (such as JSON, CBOR, MGPK, or native CESR).

**Status:**
provisional

**Related information:**

- Applicable URI schemes: `http` and `https` (the RFC 8615 defaults). Hosts
  provisioning the suffix are expected to make responses reachable over both.
- The request is unauthenticated and the response is untrusted at the
  transport layer. An OOBI carries no cryptographic authentication of its own;
  any material obtained by resolving a well-known OOBI URL must be verified
  in-band (for KERI AIDs, via the Best-Available-Data-Acceptance (BADA)
  policy) before it is acted upon. Consequently, a forged OOBI cannot poison a
  verified endpoint cache; the residual attack surface is denial-of-service.
- Related specifications: Composable Event Streaming Representation (CESR),
  <https://github.com/trustoverip/kswg-cesr-specification>; Authentic Chained
  Data Container (ACDC), <https://github.com/trustoverip/kswg-acdc-specification>.
